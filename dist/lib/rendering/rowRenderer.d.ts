// Type definitions for ag-grid v5.0.0-alpha.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { Column } from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { RenderedCell } from "./renderedCell";
import { LoggerFactory } from "../logger";
import { ColumnChangeEvent } from "../columnChangeEvent";
import { GridCell } from "../entities/gridCell";
export declare class RowRenderer {
    private columnController;
    private gridOptionsWrapper;
    private gridCore;
    private gridPanel;
    private $compile;
    private $scope;
    private expressionService;
    private templateService;
    private valueService;
    private eventService;
    private floatingRowModel;
    private context;
    private loggerFactory;
    private rowModel;
    private focusedCellController;
    private rangeController;
    private cellNavigationService;
    private firstRenderedRow;
    private lastRenderedRow;
    private renderedRows;
    private renderedTopFloatingRows;
    private renderedBottomFloatingRows;
    private eAllBodyContainers;
    private eAllPinnedLeftContainers;
    private eAllPinnedRightContainers;
    private eBodyContainer;
    private eBodyViewport;
    private ePinnedLeftColsContainer;
    private ePinnedRightColsContainer;
    private eFloatingTopContainer;
    private eFloatingTopPinnedLeftContainer;
    private eFloatingTopPinnedRightContainer;
    private eFloatingBottomContainer;
    private eFloatingBottomPinnedLeftContainer;
    private eFloatingBottomPinnedRightContainer;
    private logger;
    private destroyFunctions;
    agWire(loggerFactory: LoggerFactory): void;
    init(): void;
    onColumnEvent(event: ColumnChangeEvent): void;
    getContainersFromGridPanel(): void;
    setRowModel(rowModel: any): void;
    getAllCellsForColumn(column: Column): HTMLElement[];
    setMainRowWidths(): void;
    refreshAllFloatingRows(): void;
    private refreshFloatingRows(renderedRows, rowNodes, pinnedLeftContainer, pinnedRightContainer, bodyContainer);
    refreshView(refreshEvent?: any): void;
    private restoreFocusedCell(gridCell);
    softRefreshView(): void;
    stopEditing(cancel?: boolean): void;
    forEachRenderedCell(callback: (renderedCell: RenderedCell) => void): void;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    refreshRows(rowNodes: RowNode[]): void;
    refreshCells(rowNodes: RowNode[], colIds: string[], animate?: boolean): void;
    rowDataChanged(rows: any): void;
    private destroy();
    private refreshAllVirtualRows(fromIndex?);
    refreshGroupRows(): void;
    private removeVirtualRow(rowsToRemove, fromIndex?);
    private unbindVirtualRow(indexToRemove);
    drawVirtualRows(): void;
    workOutFirstAndLastRowsToRender(): void;
    getFirstVirtualRenderedRow(): number;
    getLastVirtualRenderedRow(): number;
    private ensureRowsRendered();
    onMouseEvent(eventName: string, mouseEvent: MouseEvent, eventSource: HTMLElement, cell: GridCell): void;
    private insertRow(node, rowIndex);
    getRenderedNodes(): any[];
    navigateToNextCell(key: any, rowIndex: number, column: Column, floating: string): void;
    private getComponentForCell(gridCell);
    moveFocusToNextCell(rowIndex: any, column: any, floating: string, shiftKey: boolean, startEditing: boolean): boolean;
}
