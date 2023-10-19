import { Text } from "@chakra-ui/react"
// import { TitleClientProps } from "../../interfaces/iscreens"
import { BtnCreate } from "../auth/components/CustomBtn"

export const TitleClient = () => {
  return (
    <div className="flex flex-wrap justify-between mx-auto py-2 px-4 mb-8">
        <Text fontSize='4xl'>Dashboard</Text>
        <BtnCreate />
    </div>
  )
}
