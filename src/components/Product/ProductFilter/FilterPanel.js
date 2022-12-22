import CategoryFilter from '~/components/Product/ProductFilter/CategoryFilter';
import DiscountFilter from '~/components/Product/ProductFilter/DiscountFilter';
import RatingFilter from '~/components/Product/ProductFilter/RatingFilter';
import PriceFilter from '~/components/Product/ProductFilter/PriceFilter';

function FilterPanel({ onChange, filters }) {
    const setPriceValue = (priceValue) => {
        console.log(priceValue);
        const newFilters = {
            ...filters,
            price: priceValue,
        };
        onChange(newFilters);
    };

    const setCategoryValue = (categoryValue) => {
        const newFilters = {
            ...filters,
            category: categoryValue,
        };
        onChange(newFilters);
    };

    const setRatingValue = (ratingValue) => {
        const newFilters = {
            ...filters,
            rating: ratingValue,
        };
        onChange(newFilters);
    };

    return (
        <>
            <PriceFilter setPriceValue={setPriceValue} />
            <CategoryFilter setCategoryValue={setCategoryValue} />
            <DiscountFilter />
            <RatingFilter setRatingValue={setRatingValue} />
        </>
    );
}

export default FilterPanel;
