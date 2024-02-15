import { useState } from "react"
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper"
import SwitchTabs from "../../../components/switchTabs/SwitchTabs"
import Carousel from "../../../components/carousel/Carousel"
import useFetch from '../../../hooks/useFetch'
const TopRated = () => {
    const [endPoint,setEndPoint]=useState('movie')
    const {data,loading} = useFetch(`/${endPoint}/top_rated`)
    const onTabChange = (tab) =>{
        setEndPoint(tab === "Movies" ? "movie" : "tv")
    }
  return (
    <div className="carouselSection">
         <ContentWrapper>
            <span className="title">Top Rated</span>
            <SwitchTabs data={['Movies','TV Show']} onTabChange={onTabChange}/>
         </ContentWrapper>
         <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
    </div>
  )
}

export default TopRated;
