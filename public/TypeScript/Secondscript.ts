class Menu
{
items : Array<string>;
pages : number;

constructor(item_list:Array<string>, total_pages:number)
{
this.items = item_list;
this.pages = total_pages;
}

list():void{
console.log("Our menu for today:")
for(var i=0;i<this.items.length;i++)
{
    console.log(this.items[i])
}
}

}

var sundaymenu = new Menu(["pancakes","oranages","waffles"],1)

sundaymenu.list();

class HappyMeal extends Menu{
    constructor(item_list:Array<string>, total_pages:number)
    {
        super(item_list,total_pages);
    }
    list():void{
        console.log("");
        for(var i =0;i<this.items.length;i++)
        {
            console.log(this.items[i]);
        }
    }
}