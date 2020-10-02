// asynchronous js 

/*
const third = () =>{
  setTimeout(() =>{


    console.log('Hey Its me third function 😄😀😆');
  },1500)


}

const second = () =>{
  setTimeout(() =>{

    console.log('Hey Its me second function 😄😃');
  },3000)
third();

}
const first = () =>{

console.log('Hey Its me first function 😄');
second();
console.log('😅');

}

first();



// Asynchronous js with call backs (old way )

const getRecipe = ()=>{
  setTimeout(()=>{

    const recipeID = [1005,25,533,34,4,32,999];
    console.log(recipeID);

    setTimeout((id)=>{

      const recipe = {
        title : 'Oats',
        publisher: 'Deepak Kaushal'
      }
      console.log(`${id}: ${recipe.title}`);

      setTimeout((publisher)=>{
        const  recipe2 = {
          title: 'pasta',
          publisher: 'John'
        }
        console.log(`${recipe2.title} : ${recipe.publisher}`);
      },2000,recipe.publisher);
    },1000,recipeID[3]);

  },1500);


}

getRecipe();


*/

/*
// Promises

const getIDs = new Promise((resolve,reject)=>{

  setTimeout(()=>{

    resolve([1234,54,3,543,343]);
    // reject([1234,54,3,543,343]);

  },1500);


});
const getRecipe = recipeID =>{
  return new Promise ((resolve,reject)=>{

    setTimeout(ID =>{
      const recipe = {
        title : 'Pasta',
        Author: 'Deepak Kaushal'
      };
      resolve(`${ID} ${recipe.title}`)
    },1500,recipeID)
  });
};


const getAuthor = author =>{
  return new Promise ((resolve,reject)=>{
    setTimeout(publisher =>{

      const recipe2 = {
        title : 'Pizza',
        Author : 'John'
      };
      resolve(`${publisher} ${recipe2.title}`)
    },3000,author);
  });
};
getIDs
.then(IDs => {
  console.log(IDs);
  return getRecipe(IDs[3]); 

})
.then(recipe =>{
  console.log(recipe);
  return getAuthor('John');

})
.then(author =>{
  console.log(author);
})
.catch(error =>{

  console.log('😀');
})



const promise = new Promise((resolve,reject)=>{
  if(true){
    resolve('Worked 😃')
  }
  else {
    reject('Error 🙃');
  }
});

promise
.then(res => res + '🙃')
.then(res2 => {
  // throw Error

  console.log(res2)

})
.catch(error => console.log(error))


const promise = new Promise((resolve,reject)=>{
  if(true){

    resolve('Stuff worked 😃')

  }
  else{
    reject('Error 🙃');
  }
})
const promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const person = {
      name: 'Deepak',
      age: 24
    }
    resolve(`${person.age}`)
  },2000)
});
const promise3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const person = {
      name: 'James',
      age: 25
    }
    resolve(`${person.name}`)
  },3000)
});
const promise4 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const person = {
      name: 'Jimmy',
      age: 26,
      occupation: 'Developer'
    }
    resolve(`${person.occupation}`)
  },1000)
});

const promise5 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const person = {
      name: 'Jimmy',
      age: 26,
      isMarried: ()=>{
        return 'No 😁'
      }
    }
    resolve(`${person.isMarried()}`)


  },7000)
});
Promise.all([promise,promise5,promise3,promise4,promise2])
.then(
  result =>{
    console.log(result);
  }
)




// API EXAMPLE
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/photos


const urls = [
  
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/photos'

]

Promise.all(urls.map(url=>{
  return fetch(url)
  .then(res => res.json())
})).then(result =>{
  console.log(result[0]);
  console.log(result[1]);
  console.log(result[2]); 
  console.log(result[2][0].title); 
  console.log(result[3]);
  console.log(result[4]);
})
.catch((err)=>{
  console.log('Error');
})
 
  



/*
// async function 


const getID = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve([1202,3421,45,32,42,55,09]);
  },1500)
});

const getRecipe = recipeID =>{

  return new Promise((resolve,reject)=>{

    setTimeout((ID)=>{
     
      const recipe = {
        title : 'Pasta',
        Author: 'Deepak Kaushal'
      };
      resolve(`${ID}: ${recipe.title}`);
    },2000,recipeID)
  })
};

const getAuthor = author =>{
  return new Promise((resolve,reject)=>{
    setTimeout((auth)=>{
      const recipe = {
        title : 'Pizza',
        Author: 'John Smith'
      }
      resolve(`${auth}: ${recipe.title}`);
    },2000,author)
  })

};

const getRecipeAW = async () => {
  const IDs = await getID;

  console.log(IDs);
  const recipe = await getRecipe(IDs[3]);
  console.log(recipe);

  const author = await getAuthor('Jamie');
  console.log(author);
  return author;
  
}


getRecipeAW()
.then(result => console.log(`${result}`));





const urls = [
  
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/photos'

]

const getData = async ()=>{
  try{


    const [users,posts,todos,comments,photos] = await Promise.all(urls.map(url =>{
  
    return   fetch(url).then(response => response.json())
    }
    ))
  
    console.log('users', users[0].name);
    console.log('posts', posts);
    console.log('todos', todos);
    console.log('comments', comments);
    console.log('photos', photos);
  }
  catch (err){
    console.log('🙃', err);
  }
  }
getData();




*/

//  for await of feature 

const urls = [
  
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/comments',
  'https://jsonplaceholder.typicode.com/photos'

]

// const getData = async ()=>{
//   try{


//     const [users,posts,todos,comments,photos] = await Promise.all(urls.map(url =>{
  
//     return   fetch(url).then(response => response.json())
//     }
//     ))
//   // throw Error
//     console.log('users', users[0].name);
//     console.log('posts', posts);
//     console.log('todos', todos);
//     console.log('comments', comments);
//     console.log('photos', photos);
//   }
//   catch (err){
//     console.log('🙃', err);
//   }
//   finally{
//     console.log('testing stuff');
//   }

//   }
// getData(); 

// for await of 
const getData2 = async ()=>{
  const arrayOfPromises = urls.map(url =>{
    return fetch(url);
  }) 
for await( let req of arrayOfPromises){
  // console.log(await  req.json()); 
  // console.log(data[Math.floor(Math.random()* data.length)]);  
  
  const data = await req.json();
  console.log(data); 
}
} 
 

getData2();
 
// Object spread operator 


// Rest parameters

// const person ={
//   name : 'Deepak',
//   age: 24,
//   occupation: 'Engineer',
  
  
// }

// const { name , ...rest}  = person;
// console.log(name);
// console.log(rest);
// console.log(rest.age); 

// const arr =[123,4,3,4,35,789];
// const sum = (a,b,c,d,e) =>{
//   return a+b +c + d+ e;
// }
// console.log(sum(1,2,3,4,5))

// console.log(sum(...arr));


// 

