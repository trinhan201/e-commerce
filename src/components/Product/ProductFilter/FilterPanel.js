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
            checked: true,
        };
        onChange(newFilters);
    };

    const setPriceValue = (priceValue) => {
        const newFilters = {
            ...filters,
            price: priceValue,
            checked: true,
        };
        onChange(newFilters);
    };

    const setCategoryValue = (categoryValue) => {
        const newFilters = {
            ...filters,
            category: categoryValue,
            checked: true,
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
            checked: true,
        };
        onChange(newFilters);
    };

    return (
        <>
            <SearchFilterForm setSearchTerm={setSearchTermValue} filters={filters} />
            <PriceFilter setPriceValue={setPriceValue} filters={filters} />
            <CategoryFilter setCategoryValue={setCategoryValue} filters={filters} />
            <BrandFilter setBrandValue={setBrandValue} filters={filters} />
            <RatingFilter setRatingValue={setRatingValue} />
        </>
    );
}

export default FilterPanel;
