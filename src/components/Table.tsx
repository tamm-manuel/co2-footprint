import React, { useState } from 'react';

interface RowData {
  country: string;
  company: string;
  emission: number;
}

interface SortConfig {
  key: keyof RowData | null;
  direction: 'asc' | 'desc';
}

interface Props {
  data: RowData[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'asc' });
  const [filterCompany, setFilterCompany] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  const handleSort = (key: keyof RowData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter(item => 
    (item.country.includes(filterCountry) || !filterCountry) && (item.company.includes(filterCompany) || !filterCompany)
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  return (
    <div>
      <div className='mb-2'>Search</div>
      <div className='grid grid-cols-2 mb-5'>
        <input name="filter-country" type="text" placeholder='country' className='px-2 bg-secondary/20 mx-2' onChange={e => setFilterCountry(e.target.value)} />

        <input name="filter-company" type="text" placeholder='company' className='px-2 bg-secondary/20 mx-2' onChange={e => setFilterCompany(e.target.value)} />
      </div>

      <table className='w-full text-xs sm:text-base'>
        <thead>
          <tr className='[&>th]:w-1/3'>
            <th>
              <table className='w-full'>
                <thead>
                  <tr className='[&>th]:w-1/3 [&>th]:relative [&>th]:cursor-pointer'>
                    <th onClick={() => handleSort('country')}>
                      Country
                      {sortConfig.key === "country" && (
                        <img src="/caret-up-solid.png" alt="arrow" className={'w-3 absolute right-0 top-1/2 -translate-y-1/2 ' + (sortConfig.direction === "desc" ? "rotate-180" : "")} />
                      )}
                    </th>
                    <th onClick={() => handleSort('company')}>
                      Company
                      {sortConfig.key === "company" && (
                        <img src="/caret-up-solid.png" alt="arrow" className={'w-3 absolute right-0 top-1/2 -translate-y-1/2 ' + (sortConfig.direction === "desc" ? "rotate-180" : "")} />
                      )}
                    </th>
                    <th onClick={() => handleSort('emission')}>
                      Emission (t)
                      {sortConfig.key === "emission" && (
                        <img src="/caret-up-solid.png" alt="arrow" className={'w-3 absolute right-0 top-1/2 -translate-y-1/2 ' + (sortConfig.direction === "desc" ? "rotate-180" : "")} />
                      )}
                    </th>
                  </tr>
                </thead>
              </table>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='max-h-52 overflow-y-scroll'>
                <table className='w-full'>
                  <tbody>
                    {sortedData.map((item, index) => (
                      <tr key={index} className='[&>td]:w-1/3'>
                        <td>{item.country}</td>
                        <td>{item.company}</td>
                        <td>{item.emission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;