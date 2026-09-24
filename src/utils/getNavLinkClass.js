function getNavLinkClass(baseClass, activeClass) {
  return ({ isActive }) =>
    isActive ? `${baseClass} ${activeClass}` : baseClass;
}

export default getNavLinkClass;
