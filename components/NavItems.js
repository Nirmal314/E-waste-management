/** @format */

function NavItems({ title }) {
    return (
        <div>
            <div className="text-white p-8 font-normal sm:flex hidden">
                <p className="cursor-pointer hover:text-gray-500">{title}</p>
            </div>
        </div>
    );
}

export default NavItems;
