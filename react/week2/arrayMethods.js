// Array.filter and Array.find()

// data for examples
const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
		featured: 'true',
        points: 6
    }
];

// Array.filter() takes in an array, searches over the array
// and returns a new array with the filtered data from the original
// const newArray = Array.filter(callbackFn);

const favThings = things.filter((thing) => thing.favorite === true);
const thingsGreaterThan50 = things.filter((thing) => thing.points > 50);
console.log(favThings);
console.log(thingsGreaterThan50);


// Array.find() searches over an array for a specific datapoint, then returns
// that data point to a new variable
// if more than one item meets the find criteria then returns the first object
// const value = Array.find(callback);

const thingById = (id) => {
	return things.find((thing) => thing.id === id);
}

const selectedThing = (thingById(4));
console.log(selectedThing);

const featuredItem = () => {
	return things.find((thing) => thing.featured === 'true');
}

const allFeaturedItems = () => {
	return things.filter((thing) => thing.featured === 'true');
}

const firstFeaturedItem = (featuredItem());
const allFeaturedBooks = (allFeaturedItems());

console.log(firstFeaturedItem);
console.log(allFeaturedBooks);
