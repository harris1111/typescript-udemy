const person = { 
    name: 'Maximilan',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}
let favoriteActivities: string[]
favoriteActivities = ['Sports'] 
console.log(person); 

for (const hobby of person.hobbies) { 
    console.log(hobby)
} 