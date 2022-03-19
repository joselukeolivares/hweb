const signin=async(user)=>{
    try{
        switch(user.option){
            case 1:
                default:
                    let response= await fetch('/auth/signin',{
                        method:'POST',
                        headers:{
                            'Accept':'applitacion/json',
                            'Content-Type':'application/json'
                        },
                        credentials:'include',
                        body:JSON.stringify(user)
                    })

                    return await response.json()
        }

    }catch(err){
        console.log(err)
    }

}

const signout=async ()=>{
    try{
        const response=await fetch('/auth/signout',{
            method:"GET"
        })

        return await response.json()


    }catch(err){
        console.log(err)
    }
}

export {signin,signout}