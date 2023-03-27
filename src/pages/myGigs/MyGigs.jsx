import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss"

export const MyGigs = () => {
    return (
        <div className="myGigs">
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to="/add"><button>Add New Gigs</button></Link>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img className="img" src="https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/bb3c540936bbbcda9568952f7d389f0e-1676404821/03276-1501619559-full%20shot%20body%20photo%20of%20the%20most%20beautiful%20artwork%20in%20the%20world%20((cpwoman%20person))%20holding%20a%20cute%20orange%20and%20white%20cat%20with%20gree/train-ai-to-draw-a-portrait-of-you.png" alt="" />
                            </td>
                            <td>Gig1</td>
                            <td>88</td>
                            <td>123</td>
                            <td>
                                <img className="delete" src="/img/delete.png" alt="" />
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}