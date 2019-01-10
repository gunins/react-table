interface IHeader {
    title: string,
    visible: boolean
}

interface ICell {
    title:string,
    id:string,
    visible:boolean

}
interface IRow {
    cells:ICell[]
}

export interface ITable {
    header: IHeader[],
    rows:IRow[]
}
