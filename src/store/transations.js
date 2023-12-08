import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'


export const useTransationStore = defineStore("movement", () => {

    const transations = ref([
        {
          owner: 'Jonas Schmedtmann',
          move: [200, 450, -400, 3000, -650, -130, 70, 1300],
          interestRate: 1.2, // %
          pin: 1111,
          username: 'js'
        },
          {
           owner: 'Jessica Davis',
           move: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
           interestRate: 1.5,
           pin: 2222,
           username: 'jd'
         },
         {
           owner: 'Steven Thomas Williams',
           move: [200, -200, 340, -300, -20, 50, 400, -460],
           interestRate: 0.7,
           pin: 3333,
           username: 'st'
         },
         {
           owner: 'Sarah Smith',
           move: [430, 1000, 700, 50, 90],
           interestRate: 1,
           pin: 4444,
           username: 'ss'
         },
        
        ])

        const isLogged = ref(false)

        
 

        let  currentAccount = ref({})


        const login  = ({username, pin}) => { 
            currentAccount.value = transations.value.find( acc => acc.username === username) 
           
                isLogged.value = true
              
        }

        const total = computed(() => { 
            return currentAccount.value.move?.reduce((acc, mov) => acc + mov, 0)}          
        )  
                  
        const addTransation = () => {
                currentAccount.value.move.push(Number(yan.value))
                yan.value = ''
        }  

        const income =   computed(() => { 
            return currentAccount.value.move?.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov, 0).toFixed(2)
            
        })

        const expense =   computed(() => { 
            return currentAccount.value.move?.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov, 0).toFixed(2)
                
        })

        const add = ({userAccount, amount}) => {
            // if( transations.value.find( acc => acc.username === userAccount)) {
            //      transations.value.move?.push(Number(amount))
            // }

           transations.value.find( acc => acc.username === userAccount).move.push(amount)
          
          currentAccount.value.move?.push(-amount)
  

          console.log( amount)
        }


        // const interest = computed(() => { 
        //     return currentAccount.value.move?.filter((mov) => mov > 0).map((acc, mov) => acc + mov, 0).toFixed(2)
                
        // }) 

        return {currentAccount, login, total, addTransation, income, expense, isLogged, add}

})