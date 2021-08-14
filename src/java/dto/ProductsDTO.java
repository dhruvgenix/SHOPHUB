/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import java.awt.Image;
import java.io.File;
import java.io.InputStream;
/**
 *
 * @author EslamWaheed
 */
public class ProductsDTO {

    public Integer id;
    public String name;
    public String description;
    public Integer price;
    public Integer quantities;
    public InputStream image;
    public Integer categoryID;

    public ProductsDTO() {
    }

    public ProductsDTO(Integer id, String name, String description, Integer price, Integer quantities, InputStream image, Integer categoryID) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantities = quantities;
        this.image = image;
        this.categoryID = categoryID;
    }

    public ProductsDTO(String name, String description, Integer price, Integer quantities, InputStream image, Integer categoryID) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantities = quantities;
        this.image = image;
        this.categoryID = categoryID;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getQuantities() {
        return quantities;
    }

    public void setQuantities(Integer quantities) {
        this.quantities = quantities;
    }

    public InputStream getImage() {
        return image;
    }

    public void setImage(InputStream image) {
        this.image = image;
    }

    public Integer getCategoryID() {
        return categoryID;
    }

    public void setCategoryID(Integer categoryID) {
        this.categoryID = categoryID;
    }
}
