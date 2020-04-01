fetch('https://restcountries.eu/rest/v2/all')
    .then((data)=>{
        return data.json();
    })
    .then((result)=>{
        let filtered = result.filter((country)=>{

            let c = country.languages.find((lang)=>
                lang.name === 'Spanish'
            )
            return c;
        });
        console.log(filtered)
    }) 

    const arr = [1,2,3,4,5].filter((num)=>
        [23409,24,345]
    );

    console.log(arr)