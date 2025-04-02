import { NavLink } from 'react-router';

export default function NavBar() {

  const navBarContent = [
    { to: "/products/category/Classics", label: "Classics" },
    { to: "/products/category/Society", label: "Society" },
    { to: "/products/category/Growth", label: "Growth" },
    { to: "/products/category/Dystopia", label: "Dystopia" },
  ];  

  return (
    <div className="flex flex-wrap justify-center">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `mx-6 text-white text-base transition-all duration-500 ease-in-out ${
              isActive ? "opacity-100 font-normal" : "opacity-60"
            } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}