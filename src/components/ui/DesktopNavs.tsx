import routes from "../../@lib/Route";

interface route {
  id: number;
  label: string;
}

const DesktopNavs = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {routes.map((route: route) => (
          <li className="text-dark-blue" key={route.id}>
            <a href="#" className="hover:text-dark-grayish-blue">{route.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavs;
