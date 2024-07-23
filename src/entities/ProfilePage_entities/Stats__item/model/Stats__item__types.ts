
interface Stats__item__props__subscribersAmount {
    prefix: "-" | "+",
    number: number
}

interface Stats__item__props__Stat {
    stat: string,
    postfix?: string
}

export interface Stats__item__props {
    amount: string,
    stats: readonly Stats__item__props__Stat[],
    caption: string,
    graphic_imgURL: string,
    amounts?: readonly string[],
    amounts__subscribers?: readonly Stats__item__props__subscribersAmount[],
}