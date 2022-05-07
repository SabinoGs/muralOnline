import { widthPercentageToDP as wp2dp, heightPercentageToDP as hp2dp } from "react-native-responsive-screen"

const width = 375
const height = 812

/*
transforma a qnt de pixels 
em porcentagem baseada na largura da tela do design
*/
export const widthPixels2Percentage = (dimension) => {
    return wp2dp((dimension/width) * 100 + "%")
}


/*
transforma a qnt de pixels 
em porcentagem baseada na altura da tela do design
*/
export const heightPixels2Percentage = (dimension) => {
    return hp2dp((dimension/height) * 100 + "%")
}
