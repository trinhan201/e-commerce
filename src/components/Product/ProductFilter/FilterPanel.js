import CategoryFilter from '~/components/Product/ProductFilter/CategoryFilter';
import BrandFilter from '~/components/Product/ProductFilter/BrandFilter';
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

    const setBrandValue = (brandValue) => {
        const newFilters = {
            ...filters,
            brand: brandValue,
        };
        onChange(newFilters);
    };

    return (
        <>
            <SearchFilterForm setSearchTerm={setSearchTermValue} />
            <PriceFilter setPriceValue={setPriceValue} />
            <CategoryFilter setCategoryValue={setCategoryValue} />
            <BrandFilter setBrandValue={setBrandValue} />
            <RatingFilter setRatingValue={setRatingValue} />
        </>
    );
}

export default FilterPanel;
