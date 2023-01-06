export type Product = {
    id : number,
    title : string,
    description : string,
    price : number ,
    image : string
}

export const products : Product[] = [
    {
        id : 1,
        title : 'Greek Salad',
        description : 'The famous lettuce peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price : 13 ,
        image : 'https://plus.unsplash.com/premium_photo-1671403964050-f7756da6c60b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 
    }, 
    {
        id : 2,
        title : 'Bruschetta',
        description : 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price : 5 ,
        image : 'https://images.unsplash.com/photo-1505575967455-40e256f73376?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 
    }, 
    {
        id : 3,
        title : 'Lemon Dessert',
        description : 'This comes straight from grandma s recipe book. every last ingerdient has been sourced and is a authentic as can be imaged',
        price : 8 ,
        image : 'https://images.unsplash.com/photo-1605466237924-1543b3abe5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80', 
    }, 
]