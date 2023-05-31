
import { addMilk } from "@/api/dataManagement";
import { FileContent, IFileContent, IMilk, IMilkDto } from "./models"


export const fillDb = async () => {
  const listOfMilìks: IMilk[] = FileContent.results;
  for (let i = 0; i < listOfMilìks.length; i++ ) {
    const milkDto: IMilkDto = {
      name: listOfMilìks[i].name,
      type: listOfMilìks[i].type,
      storage: listOfMilìks[i].storage,
    }
    const addedMilk = await addMilk(milkDto);
  }
}



  