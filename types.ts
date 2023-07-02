export interface Billboard{
    id:String,
    label:String,
    imageUrl:String,
};

export interface Category{
    id:String,
    label:String,
    billboards:Billboard,
}