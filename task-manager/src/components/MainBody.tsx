import FilterCard from "./FilterCard";
import Header from "./Header";
import InputTask from "./InputTask";

export default function MainBody() {
    return (
        <section className="mx-auto min-h-150 w-full overflow-hidden rounded-2xl border border-green-100 bg-white shadow-xl">
            <Header />
            <InputTask />
            <FilterCard />
        </section>
    );
}