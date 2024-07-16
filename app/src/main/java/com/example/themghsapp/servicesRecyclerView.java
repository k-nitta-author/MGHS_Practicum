package com.example.themghsapp;

import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

public class servicesRecyclerView extends RecyclerView.ViewHolder{


    ImageView imageView;
    TextView nameView, descriptionView;

    public servicesRecyclerView(@NonNull View itemView, ImageView imageView, TextView nameView, TextView descriptionView) {
        super(itemView);
        this.imageView = imageView;
        this.descriptionView = descriptionView;
        this.nameView = nameView;
    }

    public servicesRecyclerView(@NonNull View itemView) {
        super(itemView);

        imageView = itemView.findViewById(R.id.image_view);
        nameView = itemView.findViewById(R.id.name_view);
        descriptionView = itemView.findViewById(R.id.description_view);
    }


}
