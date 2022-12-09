import Button from "../../components/UI/Button";
const FilterHeader = () => {
  return (
    <div className="flex items-center justify-between px-16 py-3">
      <div className="text-lg text-[#212020] font-semibold">Filters</div>
      <div className="flex gap-4">
        <Button type="clear" className="border !py-2 !px-4 !text-sm h-fit">
          Clear all
        </Button>
        <Button
          type="submit"
          className="bg-[#212020] !text-sm text-gray-50 !py-2 !px-6 h-fit"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
export default FilterHeader;
