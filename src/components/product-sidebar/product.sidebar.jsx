export const ProductSidebar = () => {
    return <section className="shadow px-4">
        <h4 className=" font-heading text-primary py-3">Filter</h4>
        <hr class="mt-[-10px] border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* category */}
        <section className="my-4">
            <h4 className=" font-heading text-primary py-3">Category</h4>

            <div className="px-3">
                <div className="flex items-center gap-1">
                    <input type="checkbox" class="accent-primary h-6 " checked />
                    <label for="red-checkbox" class="text-sm font-content font-semibold">Cottonwod</label>
                </div>

                <div className="flex items-center gap-1">
                    <input type="checkbox" class="accent-primary h-6 " />
                    <label for="red-checkbox" class="text-sm font-content font-semibold">Spourc</label>
                </div>

                <div className="flex items-center gap-1">
                    <input type="checkbox" class="accent-primary h-6 " />
                    <label for="red-checkbox" class="text-sm font-content font-semibold">Dedicoad</label>
                </div>

                <div className="flex items-center gap-1">
                    <input type="checkbox" class="accent-primary h-6 " />
                    <label for="red-checkbox" class="text-sm font-content font-semibold">Blad Crypsty</label>
                </div>

                <div className="flex items-center gap-1">
                    <input type="checkbox" class="accent-primary h-6 " />
                    <label for="red-checkbox" class="text-sm font-content font-semibold">Angyniosspram</label>
                </div>

                <div className="flex items-center gap-1">
                    <input type="checkbox" class="accent-primary h-6 " />
                    <label for="red-checkbox" class="text-sm font-content font-semibold">Evergreen</label>
                </div>
            </div>
            {/* checkbox end */}

        </section>
        <hr class="mt-[-10px] border-gray-200 sm:mx-auto dark:border-gray-700" />
        {/* price filter */}
        <h4 className=" font-heading text-primary py-3">Pricing</h4>
        <div className="flex gap-3">
            <input type="number" className="w-20 border border-primary rounded-md px-2" placeholder="0"  name="" id="" />
            <input type="number" className="w-20 border border-primary rounded-md px-2" placeholder="1000" name="" id="" />
        </div>
        <button className="w-full bg-primary rounded-md my-2 text-white font-content">Pricing</button>
    </section>
}