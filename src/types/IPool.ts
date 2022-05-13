import IPoolStats from "./IPoolStats";

export interface IPool {
  hash: string;
  symbol: string;
  stats: IPoolStats;
}
