import ContentLoader from 'react-content-loader'
import './PizzaBlock.scss'
const PizzaBlockSkeleton = () => {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={483}
            viewBox="0 0 280 459"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="133" cy="118" r="118" />
            <rect x="43" y="260" rx="6" ry="6" width="170" height="24" />
            <rect x="0" y="305" rx="13" ry="13" width="280" height="95" />
            <rect x="0" y="425" rx="6" ry="6" width="89" height="27" />
            <rect x="148" y="412" rx="30" ry="30" width="132" height="48" />
        </ContentLoader>
    )
}

export default PizzaBlockSkeleton