export interface KindDeedsNeedHelpItemProps {
  id: number;
  imgURL: string;
  person: string;
  city: string;
  age: string;
  desc: string;
  price: number;
  alreadyGathered: number;
  urgentHelp?: boolean;
}
