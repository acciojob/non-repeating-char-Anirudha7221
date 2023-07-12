//your JS code here. If required.
let str=prompt();
let n=str.length;
let ans;
for(let i=0;i<n-1;i++)
	{
		if(str.charAt(i)!=str.charAt(i+1))
		{
			ans=str.charAt(i);
		}
	}
window.alert(ans);