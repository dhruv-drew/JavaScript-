#include<stdio.h>
sum(int arr[], int len){
    int sum =0;
    for (size_t i = 0; i < len; i++)
    {
        sum+= arr[i];
    }
    printf("The sum is: %d",sum);
}
main(){
    int len;
    printf("Enter the length: ");
    scanf("%d",&len);

    int arr[len];
    for(int i = 0; i < len; i++){
        printf("arr[%d]: ",i);
        scanf("%d",&arr[i]);
    }

    sum(arr,len);

}