import CategoryFilter from '~/components/Product/ProductFilter/CategoryFilter';
import DiscountFilter from '~/components/Product/ProductFilter/DiscountFilter';
import RatingFilter from '~/components/Product/ProductFilter/RatingFilter';
import PriceFilter from '~/components/Product/ProductFilter/PriceFilter';
import SearchFilterForm from '~/components/Product/ProductFilter/SearchFilterForm';

function FilterPanel({ onChange, filters }) {
    const setSearchTermValue = (searchTermValue) => {
        const newFilters = {
            ...filters,
            searchTerm: searchTermValue,
        };
        onChange(newFilters);
    };

    const setPriceValue = (priceValue) => {
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

    const setDiscountValue = (discountValue) => {
        const newFilters = {
            ...filters,
            discount: discountValue,
        };
        onChange(newFilters);
    };

    return (
        <>
            <SearchFilterForm setSearchTerm={setSearchTermValue} />
            <PriceFilter setPriceValue={setPriceValue} />
            <CategoryFilter setCategoryValue={setCategoryValue} />
            <DiscountFilter setDiscountValue={setDiscountValue} />
            <RatingFilter setRatingValue={setRatingValue} />
        </>
    );
}

export default FilterPanel;
