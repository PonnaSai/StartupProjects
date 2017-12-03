using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using DispatchApp.ViewModel;
using DispatchApp.Models;

namespace DispatchApp.Controllers
{
    public class DispatchController : Controller
    {
        //
        // GET: /Dispatch/
        public ActionResult Dimensions()
        {
            BusinessCollection obj = new BusinessCollection();
            obj.list = obj.DisplayData().ToList();
            IEnumerable<Validators> ValList = obj.GetValidation().ToList();
            TempData["ValList"] = ValList;
            return View(obj.list);
        }

        [HttpPost]
        public JsonResult Submission(IEnumerable<DispatchApp.Models.BusinessModel> ObjCol)
        {
            bool flag = true;
            foreach (BusinessModel item in ObjCol)
            {
                if(!verifyDimensions(item))
                {
                    flag = false;
                }
            }

            return Json("Conditions not Met", JsonRequestBehavior.AllowGet); 
        }

        private bool verifyDimensions(BusinessModel item)
        {
            bool result = false;
            Validators ValObj = GetValidator(item.Name);
            int voulme = Convert.ToInt32(item.Length) *  Convert.ToInt32(item.Width) *  Convert.ToInt32(item.Height);

            if (voulme > ValObj.MinVolume && voulme < ValObj.MaxVolume && Convert.ToDouble(item.Weight) < ValObj.MaxWeight)
            //&& 
            //    Convert.ToBoolean(item.IsFragile) == ValObj.AcceptFragile)
                result = true;

            
            return result;
        }

        private Validators GetValidator(string name)
        {
            Validators result = null;
            IEnumerable<Validators> valList = (IEnumerable<Validators>)TempData["ValList"];
            foreach(Validators val in valList)
            {
                if(val.Name == name)
                {
                    result = val;
                    break;
                }
            }
            return result;
        }
    }
}