export interface Card {
  id?: string;
  name?: string;
  desc?: string;
  pos?: string;
  due?: Date;
  dueComplete?: boolean;
  idMembers?: Array<string>;
  idLabels?: Array<string>;
  urlSource?: string;
  fileSource?: string;
  idCardSource?: string;
  keepFromSource?: string;
  address?: string;
  locationName?: string;
  coordinates?: string;
  idList?: string;
}

export interface CardParams {
  key: string;
  token: string;
  idList?: string;
}
