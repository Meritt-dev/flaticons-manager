import { Request, Response } from 'express';
import { ApiConstants } from '../constants';
import { ContentTransducer } from '../helper';
import { MainAxios } from '../lib';
export const GetRandomIcons = async (req: Request, res: Response) => {
  try {
    const { limit = 10 } = req.query;
    const {
      data: {
        data: { token },
      },
    } = await MainAxios({
      method: 'POST',
      url: ApiConstants.AUTH,
      data: {
        apikey: process.env.FLATICONS_KEY,
      },
    });
    const {
      data: { data },
    } = await MainAxios({
      method: 'GET',
      url: `${ApiConstants.GET_RANDOM_ICONS}?limit=${limit}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.status(200).json({
      status: 'Success',
      message: 'Images were fetched successfully',
      images: ContentTransducer(data),
      requestTime: new Date().toISOString(),
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).json({
        message: 'Internal Server Error',
        error: err.message,
        requestTime: new Date().toISOString(),
      });
    }
  }
};
