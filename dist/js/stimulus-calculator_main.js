var calculator=new Vue({el:"#calculator",data:{income:"50,000",filingStatus:"single",children:0,totalAdult:"",totalChildren:"",totalStimulus:"",nothing:""},watch:{income:function(t){const i=t.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");Vue.nextTick(()=>this.income=i)}},methods:{getResults:function(){this.totalStimulus=0,this.totalAdult=1200,this.totalChilden=0,this.nothing=!1;let t=75e3,i=1,l=parseInt(this.income.replace(/,/g,""),10);"married"==this.filingStatus?(t=15e4,i=2):"head"==this.filingStatus&&(t=112500),this.totalChildren=500*this.children,this.totalAdult=this.totalAdult*i,"single"==this.filingStatus&&(this.totalChildren=0),this.totalStimulus=this.totalAdult+this.totalChildren,l>t&&(this.totalStimulus=this.totalStimulus-.05*(l-t)),this.totalStimulus<=0&&(this.nothing=!0),this.totalStimulus=this.totalStimulus.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0})}},mounted:function(){}});function limitNumber(){this.value.length>this.maxLength&&(this.value=this.value.slice(0,this.maxLength),type="number",maxlength="2")}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiY2FsY3VsYXRvciIsIlZ1ZSIsImVsIiwiZGF0YSIsImluY29tZSIsImZpbGluZ1N0YXR1cyIsImNoaWxkcmVuIiwidG90YWxBZHVsdCIsInRvdGFsQ2hpbGRyZW4iLCJ0b3RhbFN0aW11bHVzIiwibm90aGluZyIsIndhdGNoIiwibmV3VmFsdWUiLCJyZXN1bHQiLCJyZXBsYWNlIiwibmV4dFRpY2siLCJ0aGlzIiwibWV0aG9kcyIsImdldFJlc3VsdHMiLCJ0b3RhbENoaWxkZW4iLCJtYXhGdWxsIiwibXVsdGlwbGllciIsImluY29tZUludCIsInBhcnNlSW50IiwidG9Mb2NhbGVTdHJpbmciLCJ1bmRlZmluZWQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJtb3VudGVkIiwibGltaXROdW1iZXIiLCJ2YWx1ZSIsImxlbmd0aCIsIm1heExlbmd0aCIsInNsaWNlIiwidHlwZSIsIm1heGxlbmd0aCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsV0FBQSxJQUFBQyxJQUFBLENBQ0FDLEdBQUEsY0FDQUMsS0FBQSxDQUNBQyxPQUFBLFNBQ0FDLGFBQUEsU0FDQUMsU0FBQSxFQUNBQyxXQUFBLEdBQ0FDLGNBQUEsR0FDQUMsY0FBQSxHQUNBQyxRQUFBLElBR0FDLE1BQUEsQ0FDQVAsT0FBQSxTQUFBUSxHQUNBLE1BQUFDLEVBQUFELEVBQUFFLFFBQUEsTUFBQSxJQUNBQSxRQUFBLHdCQUFBLEtBQ0FiLElBQUFjLFNBQUEsSUFBQUMsS0FBQVosT0FBQVMsS0FHQUksUUFBQSxDQUVBQyxXQUFBLFdBRUFGLEtBQUFQLGNBQUEsRUFDQU8sS0FBQVQsV0FBQSxLQUNBUyxLQUFBRyxhQUFBLEVBQ0FILEtBQUFOLFNBQUEsRUFFQSxJQUFBVSxFQUFBLEtBRUFDLEVBQUEsRUFDQUMsRUFBQUMsU0FBQVAsS0FBQSxPQUFBRixRQUFBLEtBQUEsSUFBQSxJQUVBLFdBQUFFLEtBQUFYLGNBQ0FlLEVBQUEsS0FDQUMsRUFBQSxHQUNBLFFBQUFMLEtBQUFYLGVBQ0FlLEVBQUEsUUFHQUosS0FBQVIsY0FBQSxJQUFBUSxLQUFBVixTQUNBVSxLQUFBVCxXQUFBUyxLQUFBVCxXQUFBYyxFQUVBLFVBQUFMLEtBQUFYLGVBQ0FXLEtBQUFSLGNBQUEsR0FHQVEsS0FBQVAsY0FBQU8sS0FBQVQsV0FBQVMsS0FBQVIsY0FFQWMsRUFBQUYsSUFDQUosS0FBQVAsY0FBQU8sS0FBQVAsY0FBQSxLQUFBYSxFQUFBRixJQUdBSixLQUFBUCxlQUFBLElBQ0FPLEtBQUFOLFNBQUEsR0FHQU0sS0FBQVAsY0FBQU8sS0FBQVAsY0FBQWUsb0JBQUFDLEVBQ0EsQ0FBQUMsc0JBQUEsRUFBQUMsc0JBQUEsTUFJQUMsUUFBQSxlQUtBLFNBQUFDLGNBQ0FiLEtBQUFjLE1BQUFDLE9BQUFmLEtBQUFnQixZQUNBaEIsS0FBQWMsTUFBQWQsS0FBQWMsTUFBQUcsTUFBQSxFQUFBakIsS0FBQWdCLFdBQ0FFLEtBQUEsU0FDQUMsVUFBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbGN1bGF0b3IgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNjYWxjdWxhdG9yJyxcbiAgICBkYXRhOiB7XG4gICAgICBpbmNvbWU6ICc1MCwwMDAnLFxuICAgICAgZmlsaW5nU3RhdHVzOidzaW5nbGUnLFxuICAgICAgY2hpbGRyZW46IDAsXG4gICAgICB0b3RhbEFkdWx0OiAnJyxcbiAgICAgIHRvdGFsQ2hpbGRyZW46ICcnLFxuICAgICAgdG90YWxTdGltdWx1czogJycsXG4gICAgICBub3RoaW5nOiAnJ1xuXG4gICAgfSxcbiAgICB3YXRjaDogeyBcbiAgICAgICAgaW5jb21lOiBmdW5jdGlvbihuZXdWYWx1ZSkgeyBcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ld1ZhbHVlLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSBcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7IFxuICAgICAgICAgICAgVnVlLm5leHRUaWNrKCgpID0+IHRoaXMuaW5jb21lID0gcmVzdWx0KTsgXG4gICAgICAgIH0sIFxuICAgIH0sIFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIC8vIGZ1bmN0aW9ucyBnbyBoZXJlXG4gICAgICBnZXRSZXN1bHRzOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdGhpcy50b3RhbFN0aW11bHVzID0gMDtcbiAgICAgICAgdGhpcy50b3RhbEFkdWx0ID0gMTIwMDtcbiAgICAgICAgdGhpcy50b3RhbENoaWxkZW4gPSAwO1xuICAgICAgICB0aGlzLm5vdGhpbmcgPSBmYWxzZTtcblxuICAgICAgICBsZXQgbWF4RnVsbCA9IDc1MDAwLFxuICAgICAgICAgICAgbWF4QW55ID0gOTkwMDAsXG4gICAgICAgICAgICBtdWx0aXBsaWVyID0gMSxcbiAgICAgICAgICAgIGluY29tZUludCA9IHBhcnNlSW50KCh0aGlzLmluY29tZSkucmVwbGFjZSgvLC9nLCBcIlwiKSwgMTApO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuZmlsaW5nU3RhdHVzID09ICdtYXJyaWVkJykge1xuICAgICAgICAgICAgbWF4RnVsbCA9IDE1MDAwMDtcbiAgICAgICAgICAgIG11bHRpcGxpZXIgPSAyO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsaW5nU3RhdHVzID09ICdoZWFkJykge1xuICAgICAgICAgICAgbWF4RnVsbCA9IDExMjUwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG90YWxDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4qNTAwO1xuICAgICAgICB0aGlzLnRvdGFsQWR1bHQgPSB0aGlzLnRvdGFsQWR1bHQqbXVsdGlwbGllcjtcblxuICAgICAgICBpZiAodGhpcy5maWxpbmdTdGF0dXMgPT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxDaGlsZHJlbiA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdGFsU3RpbXVsdXMgPSB0aGlzLnRvdGFsQWR1bHQgKyB0aGlzLnRvdGFsQ2hpbGRyZW47XG5cbiAgICAgICAgaWYgKGluY29tZUludCA+IG1heEZ1bGwpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxTdGltdWx1cyA9IHRoaXMudG90YWxTdGltdWx1cyAtIChpbmNvbWVJbnQgLSBtYXhGdWxsKSouMDU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy50b3RhbFN0aW11bHVzIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubm90aGluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvdGFsU3RpbXVsdXMgPSB0aGlzLnRvdGFsU3RpbXVsdXMudG9Mb2NhbGVTdHJpbmcodW5kZWZpbmVkLFxuICAgICAgICAgICAgeydtaW5pbXVtRnJhY3Rpb25EaWdpdHMnOjAsJ21heGltdW1GcmFjdGlvbkRpZ2l0cyc6MH0pO1xuXG4gICAgICB9LFxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgLy8gdGhpcy5nZXRSZXN1bHRzKClcbiAgICAgfSxcbiAgfSlcblxuICBmdW5jdGlvbiBsaW1pdE51bWJlciAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID4gdGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2xpY2UoMCwgdGhpcy5tYXhMZW5ndGgpO1xuICAgICAgICB0eXBlID0gXCJudW1iZXJcIlxuICAgICAgICBtYXhsZW5ndGggPSBcIjJcIlxuICAgIH1cbiAgfSJdfQ==
