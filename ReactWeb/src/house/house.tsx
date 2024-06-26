import useFetchHouses from "../hooks/HouseHooks";

const HouseList = () => {
  const houses = useFetchHouses();

  return (
    <div>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
        <table className="table table-hover">
          <thead>
            <thead>
              <tr>
                <th>Address</th>
                <th>Country</th>
                <th>Asking Price</th>
              </tr>
            </thead>
          </thead>
          <tbody>
            {houses.map((h) => (
              <tr key={h.id}>
                <td>{h.address}</td>
                <td>{h.country}</td>
                <td>{h.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HouseList;
