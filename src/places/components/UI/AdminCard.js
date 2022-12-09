const AdminCard = (props) => {
  return (
    <div className={`${props.className} row bg-white text-[#212020] card-shadow border-[color:var(--red-color)] border-t-4 rounded-sm font-open-sans`}>
      {props.children}
    </div>
  );
};
export default AdminCard;
