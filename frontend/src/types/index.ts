export interface Token {
  symbol: string;
  balance: string;
  fiat?: string;
  color?: string;
}

export interface Tx {
  id: string;
  title: string;
  tagColor: string;
  amount: string;
  time: string;
  positive?: boolean;
}
