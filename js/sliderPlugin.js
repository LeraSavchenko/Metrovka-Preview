!function(e,l,s,t){e.fn.sliders=function(l){var s=e.extend({infinite:!0,index:0,slidesVisible:1,slidesToScroll:1,arrows:!0,swipeAble:!0,pagination:!0,autoplay:!0,autoplaySpeed:5e3},l);return this.each(function(){var l=e(this).children(".slide");s.autoplay&&1==s.slidesVisible?(start=function(){l[0].style.display="block",setInterval(function(){for(i=0;i<l.length;i++)if("block"==l[i].style.display)return void(i<l.length-1?(l[i].style.display="none",l[i+1].style.display="block"):(l[i].style.display="none",l[0].style.display="block"))},s.autoplaySpeed)},start()):l[0].style.display="block"})}}(jQuery,window,document),window.addEventListener("load",function(){$(".slider").sliders({autoplaySpeed:2e3}),$(".slider1").sliders({autoplaySpeed:2e3}),$(".slider2").sliders(),$(".slider3").sliders({autoplay:!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlclBsdWdpbi5qcyJdLCJuYW1lcyI6WyIkIiwid2luZG93IiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJmbiIsInNsaWRlcnMiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJleHRlbmQiLCJpbmZpbml0ZSIsImluZGV4Iiwic2xpZGVzVmlzaWJsZSIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwic3dpcGVBYmxlIiwicGFnaW5hdGlvbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsInRoaXMiLCJlYWNoIiwic2xpZGVzIiwiY2hpbGRyZW4iLCJzdGFydCIsInN0eWxlIiwiZGlzcGxheSIsInNldEludGVydmFsIiwiaSIsImxlbmd0aCIsImpRdWVyeSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVVBLEVBQUdDLEVBQVFDLEVBQVVDLEdBRTlCSCxFQUFFSSxHQUFHQyxRQUFVLFNBQVNDLEdBRXZCLEdBQUlDLEdBQVdQLEVBQUVRLFFBQ2hCQyxVQUFVLEVBQ1ZDLE1BQU8sRUFDUEMsY0FBZSxFQUNmQyxlQUFnQixFQUNoQkMsUUFBUSxFQUNSQyxXQUFXLEVBQ1hDLFlBQVksRUFDWkMsVUFBVSxFQUNWQyxjQUFlLEtBQ2JYLEVBRUgsT0FBT1ksTUFBS0MsS0FBSyxXQUNoQixHQUFJQyxHQUFTcEIsRUFBRWtCLE1BQU1HLFNBQVMsU0FFMUJkLEdBQVNTLFVBQXNDLEdBQTFCVCxFQUFTSSxlQUNqQ1csTUFBUSxXQUNQRixFQUFPLEdBQUdHLE1BQU1DLFFBQVUsUUFFMUJDLFlBQVksV0FDWCxJQUFLQyxFQUFJLEVBQUdBLEVBQUlOLEVBQU9PLE9BQVFELElBQzlCLEdBQStCLFNBQTNCTixFQUFPTSxHQUFHSCxNQUFNQyxRQVFuQixZQVBJRSxFQUFJTixFQUFPTyxPQUFTLEdBQ3ZCUCxFQUFPTSxHQUFHSCxNQUFNQyxRQUFVLE9BQzFCSixFQUFPTSxFQUFFLEdBQUdILE1BQU1DLFFBQVUsVUFFNUJKLEVBQU9NLEdBQUdILE1BQU1DLFFBQVUsT0FDMUJKLEVBQU8sR0FBR0csTUFBTUMsUUFBVSxXQUszQmpCLEVBQVNVLGdCQUViSyxTQUNPRixFQUFPLEdBQUdHLE1BQU1DLFFBQVUsWUFJakNJLE9BQVEzQixPQUFRQyxVQUVwQkQsT0FBTzRCLGlCQUFpQixPQUFRLFdBQy9CN0IsRUFBRSxXQUFXSyxTQUFTWSxjQUFlLE1BQ3JDakIsRUFBRSxZQUFZSyxTQUFTWSxjQUFlLE1BQ3RDakIsRUFBRSxZQUFZSyxVQUNkTCxFQUFFLFlBQVlLLFNBQVNXLFVBQVUiLCJmaWxlIjoic2xpZGVyUGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCl7XHJcblx0XHJcblx0JC5mbi5zbGlkZXJzID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG5cclxuXHRcdHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKHtcclxuXHRcdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRcdGluZGV4OiAwLFxyXG5cdFx0XHRzbGlkZXNWaXNpYmxlOiAxLFxyXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRcdFx0YXJyb3dzOiB0cnVlLFxyXG5cdFx0XHRzd2lwZUFibGU6IHRydWUsXHJcblx0XHRcdHBhZ2luYXRpb246IHRydWUsXHJcblx0XHRcdGF1dG9wbGF5OiB0cnVlLFxyXG5cdFx0XHRhdXRvcGxheVNwZWVkOiA1MDAwXHJcblx0XHR9LCBvcHRpb25zKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBzbGlkZXMgPSAkKHRoaXMpLmNoaWxkcmVuKFwiLnNsaWRlXCIpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNldHRpbmdzLmF1dG9wbGF5ICYmIHNldHRpbmdzLnNsaWRlc1Zpc2libGUgPT0gMSkge1xyXG5cdFx0XHRcdHN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRzbGlkZXNbMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcblx0XHRcdFx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaSA8IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNsaWRlc1tpKzFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzbGlkZXNbMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0fSwgc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRzdGFydCgpO1xyXG5cdFx0XHR9IGVsc2Uge3NsaWRlc1swXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wifVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRcclxufSkgKGpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcblx0JCgnLnNsaWRlcicpLnNsaWRlcnMoe2F1dG9wbGF5U3BlZWQ6IDIwMDB9KTtcclxuXHQkKCcuc2xpZGVyMScpLnNsaWRlcnMoe2F1dG9wbGF5U3BlZWQ6IDIwMDB9KTtcclxuXHQkKCcuc2xpZGVyMicpLnNsaWRlcnMoKTtcclxuXHQkKCcuc2xpZGVyMycpLnNsaWRlcnMoe2F1dG9wbGF5OiBmYWxzZX0pO1xyXG59KTsiXX0=
