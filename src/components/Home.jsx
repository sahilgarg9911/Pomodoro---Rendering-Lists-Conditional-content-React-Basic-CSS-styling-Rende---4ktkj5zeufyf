import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';
import Mainpage from "./Mainpage";


const Home = () => {

  const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">
                
                    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
                        <div className="container-fluid p-2">
                            <a className="headertext navbar-brand text-primary mr-0">Hi 👋 Micin</a>
                            <div className="form-inline ml-auto">
                                <div className="btn btn-primary" onClick={ToggleSidebar} >
                                  
                                    <img className="sidebaricon" src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0"><img className="profilleimage" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUZGBgZGBoaGhwYGBgYGBoYGhgaGhwYGBgcIS4lHB4rIRgYJjgmKy80NTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHDErJCU0NDQ0NDE0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0MTQ0NjQ0NDQ0NDQ0NP/AABEIAMkA+wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIEBQYHAwj/xABBEAACAQIDBAcECAQEBwAAAAABAgADEQQhMQUGEkEHIlFhcYGhEzKRsUJSYnKCwdHwIzRzshSS4fEzY4Ois8LS/8QAGAEBAAMBAAAAAAAAAAAAAAAAAAECAwT/xAAkEQEBAQEAAgIBBAMBAAAAAAAAAQIRITEDQRIyUWFxQoGRIv/aAAwDAQACEQMRAD8A7NIkxAiIiEIiTEkRIkxAiJMiAmM2ztzD4VeKvUC391dWb7qjM+Oksd7t5UwdO+TVWHUQnXtZuxR66The2Nq1MRUZ6jl3PNuzkFHIDsEmQbhvN0k1at0w4NFO2/8AEYeOieWffNDxO0HfN3ZvvMW+Zlu5vnKOGT1PFb1TLnC7SqUyGR3Qg3BRmXPyMx5vIuY6OjbC6UMRS6tdRXTPMngcfiAsR4jznTN2968PjeIUiwZbXVwA1rDrAAm4ubfsT5vvLvAY16Th6bsjjMMpsR33j2jj6jkzS9wN8BjE9lUyrotyeVRRlxDsbtHn4brKhEmICIiAiJMhJERAREQEREBERASJMQIiIhBERJES22ji1o03qubKilj5DQd5085dTn3SntIqtPDqffJd/urko/zXP4YHM94tqviar1XPWc5C9wq8kHcB+cwtRMhmM/8AeXtRCT+f7/eU9v8ABNYZa6Dn/pJtXmWMdfITzI7R++2ZZ9mPfJDY2tlkLzwGFYsQActf9pHYn8axjJbs7p5mZh9nOBmrfA3lnVwjDUW8RE1C41PpZwDKnWUrJlVsZfd7az4auldNUYG2nENGU+IJE+k8Dilq00qrmrorr4MAR858s0jO+dFu0fa4JUOtF2p/hsGX0a34YvpVucREqEmIhJERAREQEREBERAREQEREBIkxAiIiEE5D0lktjCOymgHnc5eZnXpzHfWlfaNO+jLT+Z/+Y7xbM7WJ2ZuxxZ1cgRko1z7Ty5zbMPseiBbgByGuek9KKZzIos5vyur5dvJmeFjWwiWtwLbwExWIwqL7qgeAAmw1VmIxa6yuls1rmKTWYPHpNmxK63EwGNW95XLW+mtYmkOyYmogBmwY1cpg8Suc6vjrh+XPFFITrvQzXNsRT5fw3HiQyk+gnKKCTofQ9VK4p15PRb4q6Eehaa/TB2aIiVCIiAiIgIiICIiAiIgIiICIiAiIgREmRAiaPvjgmOMwzgXupB7uBrk/B5vMxm1AhK3K8QvlcX4SMzbW1wIqc+KwVJc7S+RZi02lRVjdxr5fGXlPa9A5Cot+y+c5pK7LpcVJj6tO8uamKQ3sRLSpVykaWzGNxOGveazj6RHfM/tPaiJkfSahi9o1KrFaaeZlc575Xu5PDH4ymxmO9lc2tL/ABuEqjN38hLPDOVJJNxN8c/dz7vfpFaiFFxoRNt6L66JiGqVHVFp02LM7BRY2XU95E1ysAyZchf9ZYYYfHl49s2t5GEz28fSuAx9KuvHSdXW9uJSCLjUdxl3OT9E2NKVqlEnJ047djIQPUMfgJ1iVl6jWfxvExESVSIiAiIgIiICIiAiIgIiICIiAiIgRNW2kB/iyrD3qVwedrFWHrNomG2xRXjV7dbhdb92Rka9NPjs75YCulCndGRbDW9gAO8nKavtXa2FRrBddLAgHlkxsOXpNhxuC4qiVHUOqkWRslvl1+9hYWvMJvJsJKlRH4qgQaobcOpIVSp0uWzIJzmOZLLbXReyzkXGyto0XbJrMeRyPrrL7HuRc8pr+z9nF6pcKQoIN/o3HIf7zcdoYdWpWIzmV/hrPDmu19pjjsNT+7zKYLZ9Q4Z8QuSopOasWYhSRwopBAvYXY872AmIx2zAtbkc9CLg2OU2bCllSyoRf6jcAPiFyM0zcz2prOr3l40CviHqcTWuAdbcJ9Cc54UgTrNtx2yqjnJeETF4rACmLc5b8p9KX47PdW+C0YdmctcNTPHYcry6wJ6zfdMs6bniBXUmaX9LPN5tvvRrTAx3/Rc+fEgnX5yDosRjjWOoWg1z4vTt++6dfjPpT5b3SYiJZmREQEREBERAREQEREBERAREQERECJituKbIw5PY+DAj9JlZbY/Dl0IGuRHiDcSL6Tm8rBU0ByM832ejH3R6Somz55d3f2T3rV+Fcpzc57dnb9PFsOqAAAADlPDaD9S45S3w/HUZiTloJcYlVFM3Od5Eac5zrmG1cURUudLzYd39oI62vn2TD7Wq0/aG5AA5mwExS4sK4ZCM+w3BlpOwuuV0LGILXE0nbQ1mzYHH+1p5+8BmJrW22zMjPs1+lhaTWDH7J+U8sLQds0ViF1IUkC+lyNLyjj5dt51joeoWpV3+s6D/ACqT/wC06pP/AC4bea6uujTYFSgj1qqlGqBVRWFmCC5uw5XJGR7O+b5EQrb29TERCCIiAiIgIiICIiAiIgIiICIiAiIgIiIGqbRa1VlPJr+TdYfO3lPDEHiFhK98E9m6VwMmHA/cQbofVh8JYnGhU4hy+M59zmv7dfxa7n+l7iMKvAEBKntViDfymExvUQj2hPjYnu0lytdn6zMEXxzM8MYlLgKgNnz09JDWdaLjtnqzcYPGDplkLaiYjj4TkJuGIxNOinCq8ROYLdv5zU8bUYn3Ne7h9DLzyprPPK/2ZtXgN7/6z023UDDjBuDmJicIhzLaDkP1jE1bLw8v15R+M72K/necq0U3bznbuiynw4Ru01WP/Yn6TiWDW7DxnT9y966GFpOla4XiD8SqW4QxCdYDO2S6ds3k8ObTqkS1wONp1kWpScOjDJlIIMupCpERAREQEREBERAREQEREBERAREQEREBIkyIFltbBCvSemcuIZHsYZg/G05U9Rl46b3DqSCvMMCR8OfnOvswAuTYDtyE5lvvXoPXV8NUFSsQwdafWBCLxcXEMuIKCLZ5eEi5/JfGvxqnBbOQqGbi4jYmzMB8AZkkwNH6SA+JJ+c1bAbVOhPxy8razIvildcxY+Y/ekwsua687liramKo0gbBF5ZAXv8AOaRjHLuSAc+Zmxvsse9YD1Mx21AqKba3tn+UmXqda8eWAxD8K8ImPq1uKemMrXMtEW5m2Zxya12rug/DM5hqJNBxzdDbyzX1HrMfs3Z5c5+6PeP5eMzj5aZTb4898s9Xnh4bgb1Ngq4DMfYOwWop0W+QqAcmXn2i47LfQgN8xPljHEByB2ztHRhvWMRSGGqN/FpKApJzqUxp4suh7rHtlNRDoMREqkiIgIiICIiAiIgIiICIiAiJb4zGJSUvUdUUasxsIHvKWYAXJsBzM55tvpOppdcNTLn673VPEL7x87Tnu296MTiifa1SV+ovVQfhGvneWmb9o665tnfzBYe49p7Vx9GlZs+9vdHxmi7V6UMS9xQRKK9p67/E9UfCaETJRZaZkVZXFbWxGIP8as7jsZjw+S6D4TJbm4i20MNbTjZR4Gm4/OYBTaZXc57Y/DH/AJlvipH5y0G0747BOHrGpTU+ze7cKjJD9IADlztyv2CYGnjyuhvrrY5frO0Y/BLWQo3iCNVYaMJzbbG7CqxDqUftTJXH1lU5eI1HrMN/vW/x3vie2FO1MteQ17AbzXtq40uTMvX2KQcnJ5ZiU0NgcTBQrOx0AGfjbkO+Vlkaamr7aoKbMchM7sfYDv1jkg1bt7l7TNwwG6SpZqoH3Bp+I8/AesyzYYaAAAaAaTpx8V15v/HPrcz4nmtdOFVFCKLAfu5mL2g4RSTyE2XGU5ou9GLuwQcs28eQm2rM5ZTzWAqPcknmby4wOMek6ujFXQhlYagjQyzJkgznaO87r9JOHxFkr2oVNOsf4bHuf6Pg3xM3pWBFwbg6ET5QRptG7W+uKwdlVuOnzpvdl/DzTy+BlbkfRMTUd2t/cLi7IW9lVP0HIsT9h9G8Mj3TbpXnEpiIgIiICIiAiIgRETA747a/wmFeoD1z1E++2h8hc+UTyNZ3338OHc4fDWNQe+5HEEP1VGhbxyHy5ptbbmIxBBrVWe2l7ADwUWA+ExzuWJYm5JJJOpPMnzvIJms8elAmRECAErWQRCwPS82Lo+w/HjUJ+ifXhY/lNbM6H0YYHrLU5ku34VBQerGXz91FdTQ5TW99Nv4XDUwuI67P7iL7x+0W+gB9a/hL7bu0jQolkKh3ZUTivbjchQbDW17252nOsHtZqmKZnxLmjSJNQEvwlafVz+ieJrXP2jM+ee1M/htGy9kUavu1gcgxQsjuqnkxRyPPvmeo4CnSUrTQC+p+kfE85xkYqpRxK4m4BDly9NwyleaFhcMCDazC9u+dV2BvDTxlIVEyIydfqn8weR8tRJziS9k4nW9Wct6uK1CYnGWWZTE4i+kxNekWvedGWTV9vbRFNC3PRR2tOaYioWJZjck3PiZnt5doirVPAeol1Xvzzfz+QEwDazHeu1pmcjykyq0hhlM1lSDKeiylRKwJIqVrTdd1ukPEYayVL1qWnCx66j7D/kcvCaSZAgfTGw94cPi04qDhiPeU5Ov3l/PTvmWny3gcfUouHpuyOujKbEfvsnYN0OkenWAp4sinU0D6I/3vqH08NJW5/Y66LEoU3zGYMrlUkREBESICcm6YNoXqUqAOSKXYfaY2Hop/zTrM+fN+Mf7fGV2BuOPgX7qdQfK/nLZitYGRJMiXSiSJElYFQkyBJhVDmdj6PMPwYfjawHCFBOQAA4mPhc+k42RcgdpAndt1cKDhaQbMKD1fok31PbLz9N6jTDbartiHUoG4aZJTI5trx+mU0/alUU8FSLU0Rq5Zm4EWmOCmQEDWGbFuJh3CdexihKbEWHUblkOqeycQxO12HBRp1WppTRKRWoCosgAZ3Q3XUk58vCNampOejMsYmuwNJUQAu78b8VuLgFwgXtGpPOblulQamodMj7oHaOYI5gzT6oVsYwUdQMQliCMhYWIytxTqe72ylNiWOVshNPjkktRq+Wa9nccQHj3fqO+alv5tj2NL2KH+JUBv2qmhP4tB+Kb9iatPD02djZEUsx7gPUzgO3NpNiKz1Wy42yXkq6Ko8Bb1lbvwjOfLGuZ5FZ6QRMWrzAlNQaeM9bShqdzmfgIFQEqAlN87T0AgUGJUZEkRCvaQZEDe9xt/HwpFKsS9A5W1an3p2r2r8O/tWz8fSrIKlJ1dDoVN/I9h7jnPlq8zO728dfB1OOi9vrKc0cdjrz8dRyMi56j0+l4mvbqbz0sdT406rrYVEJuVJ0IP0lOdj8jNhmfFkREQhYbbxnsaFWr9RGI8bZetp834l7knv/Odt6T8ZwYIpfOo6r5C7n+0Th1VtZpn0j7SYENAkpRJWQZKwKhJlMmFXvsynx10X7V/gCfyn0BsOnw0E+785w7c3Z7YjGU6YNhmWPYgHWt38vOd7qkIlhkALDylvqRF99a3vvtF0w7infjI1U2ZVBBZhne4yGXaJyjZe3MSjvVZgXdSOJ0RmI1NuIeA8pte+uBfE1FKVaYFMWKF+GrYvd3RfpDq2yzupmEq47HoBTQVQnEzKophrKxbMHhOVj284s5/pMYbCYgtWIZFHCzEFU4S13LEsRrmR8p2bdrBHgDsbE52HId5nLtpYqscYtJyfYpVb2Y4AFAANrMAL/GdNw201oYSpiH91Abd7clHeSQPOX7Znit99af0n7euwwqHqrZqnefoqfn8JzZjcy6x+Kao7u5uzsWbxJvLUCZ29q0haRKv3+/WUyqxKHa0qdrZmedMXPEfLuECUS2Z1P7tPUSmSDAgxBiFUGRJkGBSTCjmdPnAHM6Sh3hZlNi7crYWqKtBgrAEaAhlOqsDqMh8J2HZPSZhXoo1fiSqR11VWKhgSLqew2v5zg6tPTjjko+sokRKDlfTFjOtQpX0V3PmQo/tM5cTN/6X/wCbT+gv99Sc/mn0iKlbIfCVKZ40/wAzPZYSiVLKJUIFQgyBJMDcuiRL4x2+rSPqw/SdQ3gxYRCSbDn4Cc16Hf5it/TH903ffP8A4T/cf+xpfP6oz19tBxdCli2dqNUIyooZcQeAI1Qs4Y1M1N2dx23Mrw+zMfh6KKrOGJe5p1OIcFkCWKtmCeM2mHwmmM8cN86kr2ZrQ+8f/IZVevDFf4kVA9VaoRmJVnVwhuQQVZhY3HZM3vztMpRoYJTmqCpW++44lQ/dDXt3r2TKb2/y9P8ArD5Gafvv/PYn+of7RJ/xR9tfJkgSBK5RZBkGTPGv7h8IFA65+yNO89s9p50PdErOkgIkGJIGIEiBIkWubSDJTn4QPOs8tyZ6VJ5GBIMrvPMSuB//2Q==" alt="" /></h4>
                            
                            
                            
                            {/* <div className="closebtn btn btn-primary" onClick={ToggleSidebar}>X</div> */}
                            {/* <i className="fa fa-times">X</i> */}
                        </div>
                        <div className="sd-body">
                            <ul>
                                <li><a className="sd-link">Create Company</a></li>
                                <li><a className="sd-link">Users</a></li>
                                <li><a className="sd-link">Settings</a></li>
                                <li><a className="sd-link">Messages</a></li>
                                <li>
                                {/* <Link to="/notifications" className='headerLink' > */}
                                    <a className="sd-link">Notifications</a>
                                    {/* </Link> */}
                                    </li>

                            </ul>
                        </div>

                        <div className="closebtndiv">
                          <div className="closebtn btn btn-primary" onClick={ToggleSidebar}>➞</div>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           <Mainpage/>
           </div>
           
        </>
    )
  


  // return (
  //   <>
  //   <div>ram</div>
  //   </>
  //   )
}


export default Home;
