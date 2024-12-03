import React, { useEffect, useState } from 'react';
import JobItem from '../jobs/JobItem';
import '../../_style/components/Search.scss';
import "../../_style/components/_featuredjob.scss"
const JobItemSection = ({ jobs }) => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    handleSearch();
  }, [jobs]);
  const handleGetAll = () => {
    handleSearch()
  }
  const handleSearch = (searchTerm = '') => {
    const allJobs = jobs
      .filter((item) =>
        item.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.salary.toString().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(allJobs);
  };

  const handleFullStack = (searchTerm = '') => {
    const fullStackJobs = jobs
      .filter((item) =>
        item.position.toLowerCase().includes('fullstack')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(fullStackJobs);
  };

  const handleDesign = (searchTerm = '') => {
    const designJobs = jobs
      .filter((item) =>
        item.position.toLowerCase().includes('design')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(designJobs);
  };

  const handleJavaDev = (searchTerm = '') => {
    const javaDevJobs = jobs
      .filter((item) =>
        item.position.toLowerCase().includes('java')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(javaDevJobs);
  };

  const handleReactJSDev = (searchTerm = '') => {
    const reactJSDevJobs = jobs
      .filter((item) =>
        item.position.toLowerCase().includes('reactjs')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(reactJSDevJobs);
  };

  const handleLaravelDev = (searchTerm = '') => {
    const laravelDevJobs = jobs
      .filter((item) =>
        item.position.toLowerCase().includes('laravel')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(laravelDevJobs);
  };

  const handleFulltime = (searchTerm = '') => {
    const fulltimeJobs = jobs
      .filter((item) =>
        item.type.toLowerCase().includes('full-time')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(fulltimeJobs);
  };

  const handleParttime = (searchTerm = '') => {
    const parttimeJobs = jobs
      .filter((item) =>
        item.type.toLowerCase().includes('part-time')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(parttimeJobs);
  };

  const handleDaNang = (searchTerm = '') => {
    const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const daNangJobs = jobs
      .filter((item) =>
        normalizeString(item.company.address).includes('đa nang')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(daNangJobs);
  };

  const handleHoChiMinh = (searchTerm = '') => {
    const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const hoChiMinhJobs = jobs
      .filter((item) =>
        normalizeString(item.company.address).includes('ho chi minh')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(hoChiMinhJobs);
  };

  const handleHaNoi = (searchTerm = '') => {
    const normalizeString = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const haNoiJobs = jobs
      .filter((item) =>
        normalizeString(item.company.address).includes('ha noi')
      )
      .map((item) => ({
        id: item.id,
        position: item.position,
        salary: item.salary,
        company: item.company.company_name,
        address: item.company.address,
        logo: item.company.logo,
        time_close: item.close_day,
        type: item.type
      }));
    setSearch(haNoiJobs);
  };
  return (
    <div className="container-search">
      <div className="row-search">
        <div className="col-sm-3-">
          <div className="card-search">
            <form>
              <div className="row">
                <label className='flex justify-center items-center'>
                  <input className="checkbox" type="radio" value="Design" name='radio' onClick={handleGetAll} />
                  <span className="textSearch">Tất cả</span>
                </label>
                <h5>Tìm theo vị trí công việc</h5>
                <label>
                  <input className="checkbox" type="radio" value="Design" name='radio' onClick={handleDesign} />
                  <span className="textSearch">UI/UX Design</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Java Dev" name='radio' onClick={handleJavaDev} />
                  <span className="textSearch">Java Dev</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="FullStack" name='radio' onClick={handleFullStack} />
                  <span className="textSearch">FullStack</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="ReactJS Dev" name='radio' onClick={handleReactJSDev} />
                  <span className="textSearch">ReactJS Dev</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Laravel Dev" name='radio' onClick={handleLaravelDev} />
                  <span className="textSearch">Laravel Dev</span>
                </label>
              </div>
              <div className="row">
                <h5>Tìm theo loại</h5>
                <label>
                  <input className="checkbox" type="radio" value="Full-time" name='radio' onClick={handleFulltime} />
                  <span className="textSearch">Full-time</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Part-time" name='radio' onClick={handleParttime} />
                  <span className="textSearch">Part-time</span>
                </label>
              </div>
              <div className="row">
                <h5>Tìm theo địa chỉ</h5>
                <label>
                  <input className="checkbox" type="radio" value="Đà Nẵng" name='radio' onClick={handleDaNang} />
                  <span className="textSearch">Đà Nẵng</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Hồ Chí Minh" name='radio' onClick={handleHoChiMinh} />
                  <span className="textSearch">Hồ Chí Minh</span>
                </label>
                <label>
                  <input className="checkbox" type="radio" value="Hà Nội" name='radio' onClick={handleHaNoi} />
                  <span className="textSearch">Hà Nội</span>
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-9-">
          <div className="featured_job">
            <div className="container">
              <div className="featured_job--wrapper">
                {search &&
                  search.map((item, index) => (
                    <JobItem
                      key={index}
                      position={item.position}
                      type={item.type}
                      salary={item.salary}
                      company={item.company}
                      address={item.address}
                      logo={item.logo}
                      id={item.id}
                      description={item.description}
                      time_created={item.time_created}
                      time_close={item.time_close}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItemSection;
