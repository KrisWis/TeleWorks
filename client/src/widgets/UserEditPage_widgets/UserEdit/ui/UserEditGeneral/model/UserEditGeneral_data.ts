import { Select_Option } from "@/shared/ui-kit/Select/model/Select_types";

export enum SelectProfessionsEnum {
  DESIGNER = "Дизайнер",
  PROGRAMMER = "Программист",
  ECONOMIST = "Экономист",
}

export const ProfessionSelect__selectedOptions: Select_Option<SelectProfessionsEnum>[] =
  [
    {
      value: SelectProfessionsEnum.DESIGNER,
      label: SelectProfessionsEnum.DESIGNER,
    },
    {
      value: SelectProfessionsEnum.PROGRAMMER,
      label: SelectProfessionsEnum.PROGRAMMER,
    },
    {
      value: SelectProfessionsEnum.ECONOMIST,
      label: SelectProfessionsEnum.ECONOMIST,
    },
  ];
