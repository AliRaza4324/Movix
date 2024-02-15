import './style.scss'
import {useParams} from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailBanner/DetailBanner';
import Cast from './cast/Cast';
import VideosSection from './videoSection/VideoSection';
import Similar from './carousels/Similar';
import Recomendation from './carousels/Recomendation';

const Detail = () => {
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsLoading}=useFetch(`/${mediaType}/${id}/credits`)
  return (
    <div>
   <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>  
   <Cast data={credits?.cast} loading={creditsLoading}/>
   <VideosSection data={data} loading={loading}/>
   <Similar mediaType={mediaType} id={id}/>
   <Recomendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Detail
   