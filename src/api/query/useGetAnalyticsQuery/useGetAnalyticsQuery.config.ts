export interface IUseGetAnalyticsQueryResponse {
  totalPurchaseAmount: number;
  totalWarranties: number;
  totalActiveWarranties: number;
  totalExpiredWarranties: number;
  storeItemCount: {
    storeName: string;
    itemCount: number;
  }[];
  categoryReport: {
    categoryName: string;
    totalPurchaseAmount: string;
  }[];
}
