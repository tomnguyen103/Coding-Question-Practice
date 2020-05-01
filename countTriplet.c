long triplets(long t,vector<int>d){
   sort(d.begin(),d.end()); //sorting the vector
   long count=0;
  
   for(int i=0;i<d.size()-2;i++){
       // corner elements of subarray d[low+1 .. high]
       int low=i+1,high=d.size()-1;
       while(low<high){
//if sum of current triplet is more decrease high
           if(d[i]+d[low]+d[high]>=t){
               high--;
           }
          
           //else increase low
           else{
               //for current i there are (high-low) possible third elements
               count=count+(high-low);
               j++;
           }
          
       }
   }
   return count;
}