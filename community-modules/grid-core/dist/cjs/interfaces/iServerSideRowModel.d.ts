// Type definitions for @ag-community/grid-core v22.0.0-beta.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IRowModel } from "./iRowModel";
export interface IServerSideRowModel extends IRowModel {
    purgeCache(route?: string[]): void;
    getBlockState(): any;
    isLoading(): boolean;
}