export enum Sides {
    None = 0,
    Left = 1 << 0,
    Top = 1 << 1,
    Right = 1 << 2,
    Bottom = 1 << 3,
}

export interface SizeBase {
    width: number;
    height: number;
}

export interface Panel extends SizeBase  {
    
}

export interface Part extends SizeBase {

}

export interface PartGroup extends SizeBase {
}
