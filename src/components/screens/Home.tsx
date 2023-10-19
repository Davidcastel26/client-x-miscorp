import { Text } from "@chakra-ui/react"
import { BtnLogin } from "../auth/components/CustomBtn"
import { useAccountUser } from "../../hooks/useAccountUser"
import { useAuth } from "../../hooks/usePrivateRoutes"


export const Home = () => {

  // const { user } = useAccountUser()
  const isAuth = useAuth()
  return (
    <div className="grid gird-cols-1 lg:grid-cols-12">
        
       
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <Text className=' mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold '>
                Welcome to X CORP
            </Text>
            <Text className="text-base sm:text-lg mb-6 lg:text-xl ">
            Create a TypeScript-based REST API using Node.js and Express.js as the framework, with PostgreSQL as the database, and Prisma as the Object-Relational Mapping (ORM) tool. This api will enable you to build a robust and efficient backend system for the front-ends' applications, ensuring seamless data management and powerful REST endpoints. 
            </Text>
            {
              isAuth ? <></>: <BtnLogin />
            }
           
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <img src='../assets/hero1.jpg' alt="logo" width={400} height={400}/>
        </div>
    </div>
  ) 
}
