import { Icon, RawData } from '../types';

export const ContentTransducer = (RawContent: RawData[]): Icon[] => {
  return RawContent.map((item) => {
    return {
      id: item?.id.toString(),
      url: item?.images.png[128],
      description: item?.description,
    };
  });
};
